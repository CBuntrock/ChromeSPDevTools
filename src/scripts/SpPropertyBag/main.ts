import { SpPropertyBag } from "./SpPropertyBag";

SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function(){
    window.SpPropertyBagObj = new SpPropertyBag();
});