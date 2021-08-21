import {Property} from "./Property";
import {Dates} from "./Dates";

export type Props = {
  properties: Property[],
  countries: string[],
  searchButtonHandler: () => void
  selectLocationHandler: (locationId: string) => void,
  dayPickerHandler: ({from, to}: Dates) => void,
  selectGuestsHandler: (guests: string) => void,
}
