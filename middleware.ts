import {NextRequest, NextResponse} from "next/server";

export default function middleware(request: NextRequest) {
    // console.log("run next middleware", request);
    console.log("미들웨어~!")
    return NextResponse;
}
