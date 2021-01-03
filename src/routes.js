import express from 'express';
const app = express();
/**
 * @module api
 */
/**
 * main route
 * @name index
 * @path {GET} /Home 
 */
app.get('/', (req, res) => res.send("hello world"))
/**
 * main route
 * @name contact
 * @path {POST} /contact 
 */
app.post('/contact', (req, res) => res.send("hello world"))
/**
 * main route
 * @name about
 * @path {DELETE} /about 
 */
app.delete('/about', (req, res) => res.send("hello world"))
/**
 * main route
 * @name store
 * @path {PUT} /store 
 */
app.put('/store', (req, res) => res.send("hello world"))