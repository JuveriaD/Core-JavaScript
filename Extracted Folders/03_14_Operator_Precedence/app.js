let x = 7;

// THIS VERSION RETURNS TRUE
//&& runs before ||
//x == 7 || x === 3 && x > 10;

// THIS VERSION RETURNS FALSE
// Use parens to change order
(x == 7 || x === 3) && x > 10;


// ----- Operator Precedence ----
// NOT (!) operator has higher precedence than AND (&&) and OR (||),
// AND(&&) has higher precedence than OR (||)

//     (!       &&      ||)

//     Ex :
    let q =7;
    if(q==7 || q === 3 && q > 10)
     // True||(False && False)
    // True || (False) 
// Output : TRUE 
    {
        console.log("Higher precedence will execute first")
    }

// Note: MDN has a table chart of operators & their precedence