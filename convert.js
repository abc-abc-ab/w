/* This is a file for conversion. */
/*         CONVERT.JS             */
'use strict';
//; type 暗号 = String;
let eURI = encodeURIComponent,
dURI = decodeURIComponent;
/**
 * @param {string} t デコードされた文字列です
 * @returns {string} エンコードしたものが返ってきます
 */
let encode = (t) => {
    let tt = btoa(eURI(t));
    tt = eURI(tt);　
    return btoa(eURI(tt));
};
/**
 * @param {string} t エンコードされた文字列です
 * @returns {string} デコードしたものが返ってきます
 */
let decode = (t) => {
    let to = dURI( atob(t) );
    to = dURI(to);
    return dURI( atob(to) );
};
/*
.___.___.___.___.___.___.___.___.___.___.___.___.___.___.___.___.___.___.___.___.___.___.___.___.___.___.
| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z | 
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
`````````````````````````````````````````````````````````````````````````````````````````````````````````
*/