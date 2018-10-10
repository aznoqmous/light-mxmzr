# Light-mxmzr
a light js img resizer

just put img on a container
```
<figure style="width: 600px; height: 450px;">
  <img src="res/0.jpg" alt="">
</figure>
```

then trigger the container
```
<script>
var containers = document.getElementsByTagName('figure');
  for (var i = 0; i < containers.length; i++) {
    var fig = containers[i];
    new Maximizr(fig);
  }
</script>
```
see example [here](https://aznoqmous.github.io/light-mxmzr/)
