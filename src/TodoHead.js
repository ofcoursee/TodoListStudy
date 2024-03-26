import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    display: inline;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    display: inline;
    margin-left: 12px;
    margin-top: 4px;
    color: #868e96;
    font-size: 24px;
  }
  .tasks-left {
    color: #51AF88;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const today = new Date(); // 현재 날짜 가져오기
const week = ['일','월','화','수','목','금','토'];
const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
const dayOfWeek = `${week[today.getDay()]}요일`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <div><h1>{formattedDate}</h1><div className="day">{dayOfWeek}</div></div>
      <div className="tasks-left">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;