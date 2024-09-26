import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from "hono/cors";

const app = new Hono()
app.use("*", cors());

app.get('/', (c) => {
  return c.text('Hello Hono!')
})


const projects =  [
  {
    id: 0,
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    createdAt: "02-05-21", 
    category: "web"
  }, 
  {
      id: 1,
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      createdAt: "04-05-24", 
      category: "design"
    }, 
    {
      id: 2,
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      createdAt: "26-12-22", 
      category: "development"
    }
]



// Endepunkt for å returnere prosjekter
app.get("/projects", (c) => {
  return c.json(projects);
});




const port = 3999
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
