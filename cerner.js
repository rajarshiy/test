setTimeout(() => {
    window['CernerSmartEmbeddableLib'].calcFrameHeight = function () {
        return 1000;
    };
    alert(JSON.stringify(window['CernerSmartEmbeddableLib'].calcFrameHeight));
    console.log(window['CernerSmartEmbeddableLib']);
}, 3000)
