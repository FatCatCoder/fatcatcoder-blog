
import getConfig from 'next/config'; 

const genSlug = (x) => {
    x = x.toLowerCase();
    x = x.replace(/[^a-z0-9]+/g, '-');
    x = x.replace(/^-+|-+$/g, '');
    return x;
}

const unSlug = (x) => {
    return x.replaceAll("-", " ")
}

const imgPathFormatter = (url) => {
    const { publicRuntimeConfig } = getConfig()
    const relPath = publicRuntimeConfig.basePath;
    
    // console.log("relpath ", relPath);
    // console.log("url: ", url);

    if(url.startsWith("http") || relPath === "" || relPath === "/") return url

    const AlteredPath = url.startsWith("/")? 
    `${relPath}${url}` :
    `${relPath}/${url}`

    // console.log(AlteredPath);

    return AlteredPath;
}


export { genSlug, unSlug, imgPathFormatter };