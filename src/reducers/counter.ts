// const initital = '0';
const initialState = { count: '0' , count2:'' , check:''};


export const counterReducer = (state = initialState, action:any) => {

    switch (action.type) {
      case "NUMBER":
          if((action.value === "000" || action.value === "0") && (state.count === "0")){
            return state;
          }

          if(state.count === "0" && action.value !== "0"){
            return { count: action.value };
          }

          if(state.count2 !== undefined && (state.count2.includes("+") || state.count2.includes("-") || state.count2.includes("x") || state.count2.includes("/")) ){

            if(state.count.includes(',')){
              
              return { count:  state.count + action.value , count2:state.count2 ,check:action.value}
            }
            return { count: state.check ? state.count + action.value : action.value , count2:state.count2 ,check:action.value}
          }

        return { count: state.count + action.value };

      case "DOTS":
          if(state.count.indexOf(action.value) === -1){
              return { count: state.count + action.value , count2:state.count2 };
          }
          if(state.count2 !== undefined && (state.count2.includes("+") || state.count2.includes("-") || state.count2.includes("x") || state.count2.includes("/")) ){
            return { count: '0,' , count2:state.count2 };
          }

        return state;
      case "DELETE":

        if(state.count === "0"){
          return state;
        }
        if(state.count2 !== undefined && (state.count2.includes("+") || state.count2.includes("-") || state.count2.includes("x") || state.count2.includes("/"))){
          return {count:state.count.slice(0, -1) ,count2:state.count2 };
        }
        
        var lengthArr = state.count.slice(0, -1);
        if(lengthArr.length === 0)
        {
          return { count: '0' };
        }
        return { count: lengthArr };

      case "RESET":    
          return { count: '0' };

      case "NEGATIVE-POSITIVE":

        if(state.count === '0'){
          return state;
        }

        if(state.count2 !== undefined && (state.count2.includes("+") || state.count2.includes("-") || state.count2.includes("x") || state.count2.includes("/")) ){
          return { count:action.value + state.count , count2:state.count2 };
        }

        if(state.count.indexOf(action.value) === -1){
          return { count:action.value + state.count};
        }

        return { count:state.count.slice(1)};  

      case "OPE":

        return {count:state.count ,count2:state.count + action.value};
      
      case "SCALES":
        return {count:(Math.sqrt(Number(state.count))).toString() ,count2:"sqrt("+ state.count+ ")"};
      
      case "CORE-X":
        return {count:(parseInt(state.count)**2).toString() ,count2: state.count +"**2" };

      case "DOLE-4":
        return {count:(1 / parseInt(state.count)).toString() ,count2:"1/" + state.count};

      case "RESULT":
          
          if(state.count2 !== undefined && state.count2.includes("+")){
  
            const numA = Number(state.count2.replace("+", "").replace(",", "."));
            const numB = Number(state.count.replace(",", "."));
            return {count:((numA + numB).toString()).replace(".", ",") , count2:state.count2 + state.count + "="};
          }

          if(state.count2 !== undefined && state.count2.includes("-")){
  
            const numA = Number(state.count2.replace("-", "").replace(",", "."));
            const numB = Number(state.count.replace(",", "."));
            return {count:((numA - numB).toString()).replace(".", ",") , count2:state.count2 + state.count + "="};
          }

          if(state.count2 !== undefined && state.count2.includes("x")){
  
            const numA = Number(state.count2.replace("x", "").replace(",", "."));
            const numB = Number(state.count.replace(",", "."));
            return {count:((numA * numB).toString()).replace(".", ",") , count2:state.count2 + state.count + "="};
          }

          if(state.count2 !== undefined && state.count2.includes("/")){
  
            const numA = Number(state.count2.replace("/", "").replace(",", "."));
            const numB = Number(state.count.replace(",", "."));
            return {count:((numA / numB).toString()).replace(".", ",") , count2:state.count2 + state.count + "="};
          }

        return {count:state.count , count2:state.count + "=" }

      default:
        return state;
    }
  };
  
export default counterReducer;
  