import { useDispatch, useSelector } from "react-redux";
import { actionRouteSet } from "../redux/actions";
import { get_breadcrumbs_single_full } from "../utils/routes-lib";




const Breadcrumbs = (props) => {
  const dispatch = useDispatch();
  const route = useSelector(state => state.route);

  const _handleClickOption = (route) => {
    dispatch(actionRouteSet(route));
  };

  const breadcrumbsFull = get_breadcrumbs_single_full(route);
  console.log(breadcrumbsFull)

  const GT = (
    <>&gt;</>
  );
  
  return (
    <div className="breadcrumbs">

      {breadcrumbsFull.map((bc, index) => {
        let notLast = true;
        if ((breadcrumbsFull.length - 1) === index) {
          notLast = false
        }
        if (bc.route === 'HOME') {
          return (
            <>
              <span onClick={(e)=>{_handleClickOption(bc.route)}}> <i className="fa fa-home" aria-hidden="true"></i> </span>
              {notLast ? GT : ''}
            </>
          );
        }
        return (
          <>
            <span onClick={(e) => { _handleClickOption(bc.route) }}> {bc.title} </span>
            {notLast ? GT : ''}
          </>
        )
      })}

    </div>
  );
};

export default Breadcrumbs;