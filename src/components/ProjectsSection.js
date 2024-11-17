import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const projects = [
  {
    title: 'EV Car Landing Page',
    description: 'A sleek and modern landing page for an electric vehicle car brand built with React.js.',
    projectUrl: 'https://car-react-website.netlify.app/', // EV car live project URL
    githubUrl: 'https://github.com/aayushyadav020/car-website',
  },
  {
    title: 'Notes Maker',
    description: 'A note-taking app built with EJS, Node.js, Express, and MongoDB for storing and managing notes.',
    projectUrl: 'https://notes-maker-app.com', // Replace with the live link for the Notes Maker project if available
    githubUrl: 'https://github.com/aayushyadav020/NotesMaker',
  },
  {
    title: 'Freelance Landing Page',
    description: 'A simple and elegant landing page for a freelance portfolio, built with HTML, CSS, and JavaScript.',
    projectUrl: 'https://aayushyadav020.github.io/freelance/', // Freelance live project URL
    githubUrl: 'https://github.com/aayushyadav020/freelance',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Project image or additional details can be added here */}
            </CardContent>
            <CardFooter className="flex flex-wrap gap-4">
              <Button asChild className="flex-1">
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="flex-1 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub Source
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
