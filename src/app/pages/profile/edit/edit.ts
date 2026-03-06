import { Component } from '@angular/core';
import { NavUnderline } from '../../explore/nav-underline/nav-underline';
import { BackNav } from '../../../components/back-nav/back-nav';

@Component({
  selector: 'app-edit',
  imports: [NavUnderline, BackNav],
  templateUrl: './edit.html',
  styles: `
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
      font-size: 0.9rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      animation: badgePulse 2s infinite;
    }

    .profile-badge i {
      font-size: 0.75rem;
    }

    .profile-badge.camera {
      background-color: var(--bs-info);
      color: var(--bs-dark);
    }

    .profile-badge.camera:hover {
      transform: scale(1.15);
      box-shadow: 0 6px 20px rgba(25, 135, 84, 0.6);
    }
    label {
      display: block;
      margin-bottom: 8px;
      color: white;
      font-weight: 500;
      // font-size: 1.2rem;
    }

    .form-control,
    .form-select {
      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
      padding: 0.75rem 3.5rem 0.75rem 1.5rem;
      font-size: 1.05rem;
      font-weight: 500;
      color: #212529;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 12px rgba(13, 110, 253, 0.08);
    }

    .form-control::placeholder,
    .form-select::placeholder {
      color: #adb5bd;
      font-weight: 400;
    }

    .form-control:hover,
    .form-select:hover {
      border-color: #0dcaf0;
      box-shadow: 0 6px 20px rgba(13, 202, 240, 0.15);
    }

    .form-control:focus,
    .form-select:focus {
      outline: none;
      border-color: #0dcaf0;
      background: linear-gradient(135deg, #ffffff 0%, #e0f7fa 100%);
      box-shadow:
        0 0 0 0.25rem rgba(13, 202, 240, 0.25),
        0 6px 20px rgba(13, 202, 240, 0.15);
    }
  `,
})
export class Edit {}
