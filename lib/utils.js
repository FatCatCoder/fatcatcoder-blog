const genSlug = (x) => {
    x = x.toLowerCase();
    x = x.replace(/[^a-z0-9]+/g, '-');
    x = x.replace(/^-+|-+$/g, '');
    return x;
}


const unSlug = (x) => {
    return x.replaceAll("-", " ")
}


export { genSlug, unSlug };