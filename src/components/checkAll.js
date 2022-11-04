// import { Checkbox } from '@mui/material';
// import { useState } from "react";
// //=========================================================
// const options = ["Create", "Read", "Update", "Delete"];

// export default function CheckAll(props) {

//     console.log("props ---", props.perm)

//     const [selected, setSelected] = useState([]);
//     const isAllSelected =
//         props.perm.length > 0 && props.setPermissions.length === props.perm.length;

//     const handleChange = (event) => {
//         const value = event.target.value;
//         console.log("value ---",value);
//         if (value === "all") {
//             props.setPermissions(selected.length === props.perm.length.length ? [] : props.perm.map(x=>(x.value)));
//             return;
//         }
//         // added below code to update selected options
//         const list = [...selected];
//         const index = list.indexOf(value);
//         index === -1 ? list.push(value) : list.splice(index, 1);
//         props.setPermissions(list);
//     };

//     // console.log(selected)
//     //=========================================================
//     const listItem = props.perm.map((option) => {
//         return (
//             <div key={option.value}>
//                 <Checkbox
//                     sx={{
//                         color: '#8B5704',
//                         '&.Mui-checked': {
//                             color: "#8B5704",
//                         },
//                     }}
//                     value={option.value}
//                     onChange={handleChange}
//                     checked={selected.includes(option.name)}
//                 />
//                 <span>{option.name}</span>
//             </div>
//         );
//     });
//     //=========================================================
//     return (
//         <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: 10 }}>
//             <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: 1 }}>

//                 <Checkbox
//                     sx={{
//                         color: '#8B5704',
//                         '&.Mui-checked': {
//                             color: "#8B5704",
//                         },
//                     }}
//                     value="all"
//                     onChange={handleChange}
//                     checked={isAllSelected}
//                 />
//                 <span>All</span>
//             </div>
//             {listItem}
//         </div>
//     );
// }


import { Checkbox } from '@mui/material';
import { useState } from "react";

const options = [" Item 1", " Item 2", " Item 3", "item 4"];

export default function CheckAll(props) {
    const [selected, setSelected] = useState([]);
    const isAllSelected =
        props.perm?.map(x=>(x.value)).length > 0 && selected.length === props.perm?.map(x=>(x.value)).length;

    const handleChange = (event) => {
        const value = event.target.value;
        // console.log(value);
        if (value === "all") {
            setSelected(props.perm.map(x => { return (x.value) }))
            return;
        }
        console.log("selected --", selected)
        // added below code to update selected options
        const list = [...selected];
        const index = list.indexOf(value);
        index === -1 ? list.push(value) : list.splice(index, 1);
        setSelected(list);
        props.setPerm(selected)
    };


    const listItem = props.perm.map((option) => {
        return (
            <div key={option.value}>
                <Checkbox
                    value={option.value}
                    onChange={handleChange}
                    checked={selected.includes(option.value)}
                />
                <span>{option.name}</span>
            </div>
        );
    });

    return (
        <div style={{ display: "flex", alignItems: "center", margin: 10 }}>
            <Checkbox value="all" onChange={handleChange} checked={isAllSelected} />
            <span>  All</span>
            {listItem}
        </div>
    );
}