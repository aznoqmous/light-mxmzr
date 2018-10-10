
class Maximizr{

    constructor(container, config){
        this.container = container;

        var defaultConfig = { center: true }
        var config = config || {};
        this.config = Object.assign(defaultConfig, config);

        this.init();
        this.do();
    }

    init(){
        this.getStyle();
        this.width = this.container.clientWidth;
        this.height = this.container.clientHeight;
        this.ratio = this.width / this.height;
    }

    resize(img){

        var imgRatio = img.clientWidth / img.clientHeight;
        if( imgRatio > this.ratio ){ //fullHeight
            img.height = this.height;
            img.width = img.clientHeight * imgRatio;
            if( this.config.center ) img.style.left = (this.width - img.clientWidth) /2 +'px';
            if( this.config.center ) img.style.top  = '0px';

        }else{ //fullWidth
            img.width = this.width;
            img.height = img.clientWidth / imgRatio;
            if( this.config.center ) img.style.left = '0px';
            if( this.config.center ) img.style.top  = (this.height - img.clientHeight) /2 +'px';
        }
    }

    do(){

        var self = this;
        this.imgs = this.container.getElementsByTagName('img');
        for (var i = 0; i < this.imgs.length; i++) {
            var img = this.imgs[i];

            img.addEventListener('load', function(){
                self.resize(this);
            });

            this.container.addEventListener('resize', function(){
                self.resize(img);
            });

        }

    }

    getStyle(){
        var styles = document.createElement('style');
        this.container.classList.add('mxmzr-container');
        styles.innerHTML = '.mxmzr-container { position: relative; overflow: hidden }';
        styles.innerHTML += '.mxmzr-container img { position: absolute; }';
        document.body.appendChild(styles);
    }
}
