import { useDispatch, useSelector } from "react-redux";
import { actionRouteSet } from "../redux/actions";
import { get_breadcrumbs_single_full } from "../utils/routes-lib";


const BCItem = (props) => {
  const dispatch = useDispatch();

  const bc = props.bc;

  const _handleClickOption = (route) => {
    dispatch(actionRouteSet(route));
  };

  const GT = (
    <>&gt;</>
  );

  if (props.isHome) {
    return (
      <>
        <span key={bc.route} className="clickable" onClick={(e) => { _handleClickOption(bc.route) }}> <i className="fa fa-home" aria-hidden="true"></i> Home </span>
        {props.notLast ? GT : ''}
      </>
    );
  }
  return (
    <>
      <span key={bc.route} className="clickable" onClick={(e) => { _handleClickOption(bc.route) }}> {bc.title} </span>
      {props.notLast ? GT : ''}
    </>
  )
};


const Breadcrumbs = (props) => {
  const route = useSelector(state => state.route)
  const breadcrumbsFull = get_breadcrumbs_single_full(route);
  console.log(breadcrumbsFull)

  return (
    <div className="breadcrumbs">

      {breadcrumbsFull.map((bc, index) => {
        let notLast = true;
        if ((breadcrumbsFull.length - 1) === index) {
          notLast = false
        }
        if (bc.route === 'HOME') {
          return (
            <BCItem key={bc.route} isHome notLast={notLast} bc={bc} />
          );
        }
        return (
          <BCItem key={bc.route} notLast={notLast} bc={bc} />
        )
      })}

    </div>
  );
};

export default Breadcrumbs;