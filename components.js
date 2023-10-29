Vue.component('left-side', {
    template: '<aside id="leftside"></aside>'
});

Vue.component('right-side', {
    template: `
        <aside id="rightside">
            <slot name="header-slot"></slot>
            <slot name="photo-aside"></slot>
            <slot></slot>
            <slot name="footer"></slot>
        </aside>
    `
});

Vue.component('header-slot', {
    template: `<div id="container"><header><headcomp></headcomp></header></div>`
});

Vue.component('headcomp', {
    template: '<span>Food Blog</span>'
});

Vue.component('photo-aside', {
    template: `
        <aside id="photos">
            <img src="images/chili.jpg" alt="White Chicken Chili" width="180">
        </aside>
    `
});

Vue.component('blog-title', {
    template: '<h2><span>comments</span></h2>'
});

Vue.component('blog-posts', {
    // Add the data and methods properties from the Vue instance for #blogposts here
    // Replace the template with the HTML from the `main` element
});

Vue.component('blog-footer', {
    template: '<footer>&copy; Copyright FOOD BLOG</footer>'
});

new Vue({ el: 'body' });
