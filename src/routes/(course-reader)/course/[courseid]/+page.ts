import { courseService } from "$lib/services/course";
import { currentLo } from "$lib/stores";

export const ssr = false;

export const load = async ({ params, parent, fetch }) => {
  const course = await courseService.readCourse(params.courseid, fetch);
  currentLo.set(course);

  return {
    course,
    lo: course
  };
};
