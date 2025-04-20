// import PropTypes from 'prop-types'

function Student(props) {
  return (
    <>
      <div>Ім'я: {props.name}</div>
      <div>Вік: {props.age}</div>
      <div>{props.isStudent ? "Студент!":"Гуляка!"}</div>
    </>
  );
}

// // PropTypes
// Student.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   isStudent: PropTypes.bool
// }

// // Default props
// Student.defaultProps = {
//   name: "Guest",
//   age: 0,
//   isStudent: true
// }
export default Student;