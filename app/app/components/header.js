import componentObject from 'vn-native-js/componentObject';
import style from '../css/style.js';
let header = (title = 'Home') => {
    let box = new componentObject();
    box.create();
    box.attr('style',style.header);
    let sitename = new componentObject();
    sitename.create("h2");
    sitename.object.innerText = title;
    sitename.attr("style",style.appTitle);
    box.childComponent(sitename.get());
    return box.get();
}
export default header;