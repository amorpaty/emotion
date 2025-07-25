import aos from 'aos';
import 'aos/dist/aos.css';

// AOS 초기화
aos.init({
    duration: 800,    // 애니메이션 지속 시간 (ms)
    delay: 100,       // 시작 지연 시간
    once: true        // 한 번만 실행 (스크롤 다시 해도 반복 안 함)
});