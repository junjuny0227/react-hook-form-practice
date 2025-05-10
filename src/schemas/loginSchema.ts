import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "필수 입력")
    .toLowerCase()
    .trim()
    .regex(
      /^s\d{2}0(0[1-9]|[1-6]\d|7[0-2])@gsm\.hs\.kr$/,
      "GSM 이메일만 가능 (예: s240XX@gsm.hs.kr)"
    ),
  password: z
    .string()
    .min(8, "최소 8자 이상")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      "영문 대/소문자, 숫자, 특수문자 모두 포함 필수"
    ),
});
