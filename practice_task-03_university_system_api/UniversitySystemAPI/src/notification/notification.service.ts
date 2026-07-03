import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service';

@Injectable()
export class NotificationService {
  constructor(
    @Inject(forwardRef(() => EnrollmentService))
    private readonly enrollmentService: EnrollmentService,
  ) {}

  sendNotification(studentName: string, message: string) {
    return {
      message: 'Notification sent',
      studentName,
      content: message,
    };
  }

  checkEnrollmentAndNotify(studentName: string, courseId: string) {
    // call enrollmentService.getEnrollments() and return result
    const enrollments = this.enrollmentService.getEnrollments();
    return {
      message: `Checked enrollment for student ${studentName} in course ${courseId}`,
      enrollments,
    };
  }
}
