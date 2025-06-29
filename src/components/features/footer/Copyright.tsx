import appConfig from "@/app.config";

const Copyright = () => {
  return (
    <div className="text-xs text-center text-muted-foreground">
      &copy; {new Date().getFullYear()} {appConfig.appName}. All rights reserved.
    </div>
  )
}

export default Copyright;