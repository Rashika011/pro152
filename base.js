AFRAME.registerComponent('count of clicks', {
  schema: {
    moveX: { type: "number", default: 0 },
  },
  update: function () {

    window.addEventListener("click", e => {   
        this.data.clickCounter = this.data.clickCounter = this.data.clickCounter + 1;
      this.data.moveX = this.data.moveX +0.005;
        if(this.data.clickCounter === 1){
            const rotation = {x: 0, y:20 , z:0};
            this.el.setAttribute("rotation",rotation);
           }   else if(this.data.clickCounter === 2)
           {
        }
    });
}})