import renderDetailsPanel from './components/Details'
import './styles.css'

const app = <HTMLDivElement>document.getElementById('app')
const token = localStorage.getItem('token')

if (token) {
    renderDetailsPanel(app)
} else {
  location.href = 'login.html'
}
