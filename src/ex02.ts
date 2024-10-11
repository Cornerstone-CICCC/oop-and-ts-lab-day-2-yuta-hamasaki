// Create an interface `Team` that contains a readonly `name` and `members` array.
// - Use `Partial` to allow updates to the `members`.
// - Return type: `Team` after applying partial updates.

interface Team {
  readonly name: string;
  members: { name: string; role: string }[];
}

function updateTeam(team: Team, updates: Partial<Team>):Team {
  // console.log({    ...team,
  //   ...updates,
  //   name: team.name})

  return {    
    ...team,
    ...updates,
    name: team.name
  }
}

// Expected output:
const team = { name: "Dev Team", members: [{ name: "Alice", role: "Developer" }] };
updateTeam(team, { members: [{ name: "Bob", role: "Designer" }] }) 
// { name: "Dev Team", members: [{ name: "Bob", role: "Designer" }] }