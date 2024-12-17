import { useEffect } from "react";

function Photo() {
  useEffect(() => {
    alert("개발 중...홈으로 돌아갑니다...");
    window.location.href = "/"; // 루트 페이지로 이동
  }, []);

  return null;
}

export default Photo;
