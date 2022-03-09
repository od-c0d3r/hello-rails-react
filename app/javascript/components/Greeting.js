import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage } from "../state/message/messageSlice";


const Greeting = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.message);
  console.log();

  useEffect(() => dispatch(fetchMessage()), [])

  return (
    <React.Fragment>
      {message.message_content}
    </React.Fragment>
  );
}

export default Greeting
