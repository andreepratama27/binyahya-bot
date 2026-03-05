Please refer to this document about how I run this project.

- Always use Tanstack React Query for data fetching
- Use tailwind css for styling the components
- Always use TypeScript for type safety
- Keep the codebase clean and organized
- When creating a component, keep it small. Avoid over-engineering

# Commit Rules

- When I ask to do a commit with `/commit-commands:commit`, no need to ask me a confirmation. Just do it.

# Creating Task

This project is use [Beads](https://github.com/steveyegge/beads) for project tracking. Do this instead to tracking an issue for this project:
- Run `bd create "<title_of_the_project>" -p <priority_from_0_to_2>`
- Run `bd ready` to list next task todo
- Run `bd show <id>` to view task
- Run `bd list` to show list of all task
- Run `bd update <task_id> --claim` when working for each task. You can find task id using `bd list`
- Run `bd close <task_id> --reason "<reason_of_this_task_completed>"` for closing the ticket
- Run `bd ready` after closing the ticket and check other task to working next
