import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "이메일을 입력해주세요.")
    .toLowerCase()
    .trim()
    .regex(
      /^s\d{2}0(0[1-9]|[1-6]\d|7[0-2])@gsm\.hs\.kr$/,
      "올바른 GSM 이메일 형식이 아닙니다. (예: s230XX@gsm.hs.kr)"
    ),
  password: z
    .string()
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      "비밀번호는 최소 8자 이상이며, 대문자, 소문자, 숫자, 특수문자를 각각 1개 이상 포함해야 합니다."
    ),
});
