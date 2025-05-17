import { ImageResponse } from "next/og";
import { getProjectById } from "@/data/projectsData";

export const runtime = "edge";
export const alt = "Project Details";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id, 10);
  const project = getProjectById(projectId);
  
  const title = project ? project.title : "Project Not Found";
  const description = project ? project.description : "The requested project could not be found.";
  
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#111",
          color: "#fff",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: 60, margin: "0 0 20px" }}>{title}</h1>
          <p style={{ fontSize: 30, margin: 0, maxWidth: "80%" }}>
            {description.length > 100 ? `${description.substring(0, 100)}...` : description}
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: 24, margin: 0 }}>Youssef Mohammed | Portfolio</p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
