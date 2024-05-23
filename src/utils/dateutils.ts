// utils/dateUtils.ts

export class DateUtils {
    static formatDateToPT(dateString: string): string {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0"); // January is 0!
      const year = date.getFullYear();
  
      return `${day}/${month}/${year}`;
    }
  
    static formatTimeToPT(dateString: string): string {
      const date = new Date(dateString);
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
  
      return `${hours}:${minutes}:${seconds}`;
    }
  
    static formatDateTimeToPT(dateString: string): string {
      return `${DateUtils.formatDateToPT(dateString)} ${DateUtils.formatTimeToPT(dateString)}`;
    }
  }
  