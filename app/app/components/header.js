import componentObject from 'vn-native-js/componentObject';
let header = (title = 'Home') => {
    let box = new componentObject();
    box.create();
    box.attr('class','container-fluid bg-primary text-white');
    box.cssObject({
        "padding":50
    });
    let sitename = new componentObject();
    sitename.create("h2");
    sitename.setText(title);
    sitename.cssObject({
        textShadow:"3px 3px 3px #5e5e5e"
    });
    // subtitle 
    let subtitle = new componentObject();
    subtitle.create('span');
    subtitle.setText('Vn native framework v2');
    box.childComponent(sitename.get());
    box.childComponent(subtitle.get());
    return box.get();
}
export default header;