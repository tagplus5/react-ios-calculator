const Display = ({ value }) => {
   const handleChange = () => { };

   return (
      <div id="display" className="flex">
         <input type="text" tabIndex="-1" value={value} onChange={handleChange} />
      </div>
   );
};

export default Display;
