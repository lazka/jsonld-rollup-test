//import jsonld from 'jsonld';
import jsonld from 'jsonld/dist/jsonld.min.js';

const context = {
    "name": "http://schema.org/name",
    "othername": "http://schema.org/name",
    "homepage": {
      "@id": "http://schema.org/url",
      "@type": "@id"
    },
    "image": {
      "@id": "http://schema.org/image",
      "@type": "@id"
    }
}

const someobject = {
    "@context": context,
    "image": "http://manu.sporny.org/images/manu.png",
    "name": "Manu Sporny",
    "othername": "Manu Sporny 2",
    "homepage": "http://manu.sporny.org/"
};

async function main () {
    const expanded = await jsonld.expand(someobject);
    console.log(JSON.stringify(expanded, null, 2));

    const compacted =await jsonld.compact(expanded, context);
    console.log(JSON.stringify(compacted, null, 2));
}

main();