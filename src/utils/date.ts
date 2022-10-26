export const format = () => {};

const lz = (n: number) => {
    return n < 10 ? '0' + n : n;
};

export const formatDateWithTime = (date: Date) => {
    return `${formatDate(date)} ${formatTime(date)}`;
};

export const formatTime = (date: Date) => {
    return `${lz(date.getHours())}:${lz(date.getMinutes())}:${lz(
        date.getSeconds()
    )}`;
};

export const formatDate = (date: Date) => {
    return `${date.getFullYear()}-${lz(date.getMonth() + 1)}-${lz(
        date.getDate()
    )}`;
};
