function removeFromObject(obj, keyToOmit) {
    let {[keyToOmit]: _, ...rest} = obj;
    return rest;
}

export default removeFromObject;