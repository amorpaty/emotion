import aos from 'aos';
import 'aos/dist/aos.css';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

// AOS 초기화
aos.init({
    duration: 800,    // 애니메이션 지속 시간 (ms)
    delay: 100,       // 시작 지연 시간
    once: true        // 한 번만 실행 (스크롤 다시 해도 반복 안 함)
});

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['9/1', '9/5', '9/10', '9/15', '9/20', '9/25'],
        datasets: [
            {
                label: '슬픔',
                data: [12, 19, 14, 17, 23, 20],
                borderColor: 'rgba(99, 102, 241, 1)',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                tension: 0.4,
            },
            {
                label: '기쁨',
                data: [5, 9, 10, 12, 18, 25],
                borderColor: 'rgba(251, 191, 36, 1)',
                backgroundColor: 'rgba(251, 191, 36, 0.1)',
                tension: 0.4,
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, // ✅ 꼭 있어야 합니다
        plugins: {
            legend: { position: 'top' },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: { stepSize: 5 }
            }
        }
    }
});