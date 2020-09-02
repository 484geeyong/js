import React from 'react';

function Hello({color,name,isSpecial}){
    // console.log(props)
    return (
    <div style={{
        color
    }}>
        
        {/* {isSpecial ? <b>*</b> : null} */}
        {/* {isSpecial && <b>*</b>} */}
        {isSpecial ? '스페셜하다' : '낫스페셜'}

        안녕하세요{name}
    </div>
    );
}
Hello.defaultProps={ //기본적으로 쓸 값
    name: '이름없음'
};
export default Hello; //내보내주겠따.