import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import projectData from "./projects.json"


const app = new Hono()
app.use("/*", cors())
app.use("/statistics/*", serveStatic({root: "./"}))


//POST-rute for å legge til nye prosjekter
app.post("/add", async (c) => {
    const newProject = await c.req.json();
    console.log(newProject);
    projectData.push({ id: projectData.length ++, ...newProject });
    return c.json(projectData, { status: 201 });
  });

//GET-rute for å hente alle prosjekter
app.get("/", (c) => {
    return c.json(projectData);
  });


const port = 3998
console.log(`server is running on port ${port}`)

serve({
    fetch: app.fetch,
    port
})

