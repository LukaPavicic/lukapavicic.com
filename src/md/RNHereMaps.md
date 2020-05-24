## HERE Developer Account Setup
First of all, as you probably know you need to make an account at [HERE Developer webiste](https://developer.here.com/).

After you have made an account, you have to create a project(you can get a Freemium plan for free and it has plenty of requests available for free, upgrade if you need more). After that you need to "Generate App" for REST & XYZ HUB API/CLI at your project page. With that, you will recieve APP ID and APP CODE. With all this, HERE Developer Account setup is complete.

## React Native Code
Lets jump to React Native now.

First of all you need to install a npm package called `react-native-maps` which we will use to display data that HERE provides. You can see installation instructions [here](https://github.com/react-native-community/react-native-maps).

After this, lets assume you have already created a component that will show the map. You need to import this:
```javascript
import { Marker, Polyline } from 'react-native-maps'
import { MapView } from 'expo'
```

With that we have our map almost ready.

I will use `axios` in this example but you can use `fetch` to make requests to HERE if you want.

So we import axios(if you never worked with it you can learn more about it [here](https://github.com/axios/axios)):
```javascript
import axios from 'axios'
```

Now, you should have coordinates of those two locations ready in a state or somewhere, and it should look something like this:

```javascript
constructor(props){
    super(props)
    this.state = {
        startingLocation: {
	        latitude: "xx.x",
	        longitude: "yy.y",
        },
        finishLocation: {
	       latitude: "xx.x",
	       longitude: "yy.y",
        }
    }
}
```

With "xx.x" and "yy.y" being actual coordinates you want.

So now when you have coordinates of start and finish location you can make a request to you HERE API project. It's as easy as this(I got this api from [here](https://developer.here.com/documentation/routing/topics/request-a-simple-route.html)):

```jsx
    // I will create a function which will call this, you can call it whenever you want
    _getRoute = () => {
        // we are using parseFloat() because HERE API expects a float
        let from_lat = parseFloat(this.state.startingLocation.latitude)
        let from_long = parseFloat(this.state.startingLocation.longitude)
        let to_lat = parseFloat(this.state.finishLocation.latitude)
        let to_long = parseFloat(this.state.finishLocation.longitude)
        // we will save all Polyline coordinates in this array
        let route_coordinates = []
        axios.get(`https://route.api.here.com/routing/7.2/calculateroute.json?app_id=PUT_YOUR_APP_ID_HERE&app_code=PUT_YOUR_APP_CODE_HERE&waypoint0=geo!${from_lat},${from_long}&waypoint1=geo!${to_lat},${to_long}&mode=fastest;bicycle;traffic:disabled&legAttributes=shape`).then(res => {
            // here we are getting all route coordinates from API response
            res.data.response.route[0].leg[0].shape.map(m => {
                // here we are getting latitude and longitude in seperate variables because HERE sends it together, but we
                // need it seperate for <Polyline/>
                let latlong = m.split(',');
                let latitude = parseFloat(latlong[0]);
                let longitude = parseFloat(latlong[1]);
                routeCoordinates.push({latitude: latitude, longitude: longitude});
            }
            this.setState({
                routeForMap: routeCoordinates,
                // here we can access route summary which will show us how long does it take to pass the route, distance etc.
                summary: res.data.response.route[0].summary,
                // NOTE just add this 'isLoading' field now, I'll explain it later
                isLoading: false,
            })
        }).catch(err => {
            console.log(err)
        })
    }

```

**NOTE** There are few things to note here. First is that you have to replace APP ID and APP CODE with acutal APP ID and APP CODE from your HERE project.
Second note that I added `&legAttributes=shape` at the end of the request URL but it is not in the documentation. I put it there so Polyline coordinates acutally have a correct shape, if you don't put it, it will just respond with coordinates of road turns and that polyline will go over buildings and stuff, it will just look bad.


OK. So now we have coordinates to make a Polyline, let's do that.

```jsx
<MapView>
  <Polyline coordinates={this.state.routeForMap} strokeWidth={7} strokeColor="red" geodesic={true}/>
  <Marker coordinate={{latitude: this.state.startingLocation.latitude, longitude: this.state.startingLocation.longitude}} title="Starting location"/>
  <Marker coordinate={{latitude: this.state.finishLocation.latitude, longitude: this.state.finishLocation.longitude}} title="Finishlocation"/>
</MapView>
```

Explanation:
Polyline.coordinates will map through all of the coordinates that we have provided and draw a Polyline. strokeWidth is just how thick you want your line to be, and strokeColor is obviously color of a line.

Now, you should add a `region` to your MapView component to let it know what is the initial region you want to show on the map. So I suggest you to do something like this:

In state, define a region field and make it the same coordinates as starting location, and then set delta to make a bit larger view.

```js
// so in state just add this
region: {
  latitude: parseFloat("xx.x"),
  longitude: parseFloat("yy.y"),
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}
```

And now, add `region={this.state.region}` to MapView.

You would be done now, but let's make sure this works every time. You need to make sure that HERE API request is complete before the map renders. I would do it like this:

```js
// in your state define field to control if loading is finished
isLoading: true,
```

Now, you would call the function `_getRoute()` we made before in componendDidMount() lifecycle function provided by React Native. Like this:
```js
componentDidMount() {
  // when this function is finished, we will set isLoading state to false to let program know that API request has finished and now we can render the map
  this._getRoute()
}
```

So finally a final step is to control `isLoading` in your render() function:
```js
render() {
  if(this.state.isLoading) {
    return (
      <Text>Loading...(you could also use <ActivityIndicator/> or what ever you want to show while loading the request)</Text>
    )
  } else {
    // just put everything we already did here + stuff you already have
  }
}
```
## Conclusion

So here it is. I tried to make it as detailed as possible to make it easy to understand everything.

Don't ever hesitate to ask me anything if something is unclear or it's not working or you need more help! I'm always happy to help!