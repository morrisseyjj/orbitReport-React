import './styling.css';

const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       {/* 4 columns here */}
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
    {/* map over all the data here. ! id = index ! data 1st index 2nd*/}
      {sat.map((data, id) => {
        return (
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
    {/* #5 Use Ternary operator to check status*/}
              <td>{data.operational === false ? "Inactive" : "Active"}</td>
            </tr>
            )
          })}
     <tr>

     </tr>
     </tbody>
   </table>
  );
};

export default Table;

