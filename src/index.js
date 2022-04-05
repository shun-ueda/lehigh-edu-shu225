import { load } from 'cheerio'

try {
    const res = await fetch("https://www.lehigh.edu/cgi-bin/ldapsearch/ldapsearch.pl?mail=shu*")
    const text = await res.text();
    console.log(text)
} catch (e) {
    console.log(e)
}
