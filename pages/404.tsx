import { Box, Typography } from "@mui/material";
import theme from "@/styles/theme";
import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";

export default function NotFoundPage() {
    const router = useRouter();
    const { t } = useTranslation(router);

    return (
        <Box
            sx={{
                padding: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "90vh",
                bgcolor: theme.palette.blue.dark,
            }}
        >
            <Typography
                fontSize={{ xs: "10vw", md: "7vw" }}
                color={theme.palette.basic.light}
                textAlign="center"
                sx={{
                    textShadow: `0px 0px 15px ${theme.palette.basic.light}`,
                }}
            >
                {t("global.page404")}
            </Typography>
        </Box>
    );
}
