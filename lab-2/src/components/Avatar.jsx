export default function Avatar({ person, size = 64 }) {
  return (
    <img
      className="avatar"
      src={person.photo}
      alt={person.name}
      style={{ width: size, height: size }}
    />
  )
}
