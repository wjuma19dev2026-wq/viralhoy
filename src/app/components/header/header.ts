import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styles: `
    .header-section {
      // background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      // border-bottom: 2px solid rgba(0, 123, 255, 0.1);
    }

    .greeting-text {
      font-size: 1rem;
      letter-spacing: 0.5px;
      animation: fadeInDown 0.6s ease-out;
    }

    .header-title {
      line-height: 1.2;
      margin-bottom: 1rem;
      animation: fadeInUp 0.8s ease-out;
    }

    .text-gradient {
      background: linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .text-gradient-secondary {
      background: linear-gradient(135deg, #0dcaf0 0%, #20c997 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .header-subtitle {
      font-size: 0.95rem;
      animation: fadeInUp 1s ease-out 0.2s both;
    }

    .profile-section {
      display: flex;
      align-items: center;
      animation: fadeInRight 0.8s ease-out;
    }

    .profile-avatar-wrapper {
      position: relative;
      width: 100px;
      height: 100px;
    }

    .profile-avatar {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid #0d6efd;
      box-shadow: 0 8px 24px rgba(13, 110, 253, 0.2);
      transition: all 0.3s ease;
    }

    .profile-avatar:hover {
      transform: scale(1.05);
      box-shadow: 0 12px 32px rgba(13, 110, 253, 0.3);
    }

    .profile-badge {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 0.9rem;
      border: 3px solid white;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      animation: badgePulse 2s infinite;
    }

    .profile-badge i {
      font-size: 0.75rem;
    }

    /* Verified Badge */
    .profile-badge.verified {
      background: linear-gradient(135deg, #198754 0%, #20c997 100%);
      box-shadow: 0 4px 12px rgba(25, 135, 84, 0.4);
    }

    .profile-badge.verified:hover {
      transform: scale(1.15);
      box-shadow: 0 6px 20px rgba(25, 135, 84, 0.6);
    }

    /* Not Verified Badge */
    .profile-badge.not-verified {
      background: linear-gradient(135deg, #6c757d 0%, #adb5bd 100%);
      box-shadow: 0 4px 12px rgba(108, 117, 125, 0.3);
    }

    .profile-badge.not-verified:hover {
      transform: scale(1.15);
      box-shadow: 0 6px 20px rgba(108, 117, 125, 0.5);
    }

    @keyframes badgePulse {
      0%,
      100% {
        filter: drop-shadow(0 4px 12px rgba(25, 135, 84, 0.3));
      }
      50% {
        filter: drop-shadow(0 4px 20px rgba(25, 135, 84, 0.6));
      }
    }

    .profile-badge.not-verified {
      animation: none;
    }

    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @media (max-width: 768px) {
      .header-title {
        font-size: 1.75rem;
      }

      .profile-avatar-wrapper {
        width: 80px;
        height: 80px;
      }

      .header-subtitle {
        font-size: 0.85rem;
      }
    }
  `,
})
export class Header {
  // Signal para controlar si el usuario está verificado (cambiar a false para usuario no verificado)
  isVerified = signal(false);

  // Método para toggle de verificación (útil para pruebas)
  toggleVerification() {
    this.isVerified.update((val) => !val);
  }
}
