use savage_summit::elements::trophies::interface::{TrophyTrait, BushidoTask, Task, TaskTrait};

impl Feeder of TrophyTrait {
    #[inline]
    fn identifier(level: u8) -> felt252 {
        'FEEDER'
    }

    #[inline]
    fn hidden(level: u8) -> bool {
        false
    }

    #[inline]
    fn index(level: u8) -> u8 {
        level
    }

    #[inline]
    fn points(level: u8) -> u16 {
        50
    }

    #[inline]
    fn group() -> felt252 {
        'Feeder'
    }

    #[inline]
    fn icon(level: u8) -> felt252 {
        'fa-fork-knife'
    }

    #[inline]
    fn title(level: u8) -> felt252 {
        'Cooking Master'
    }

    #[inline]
    fn description(level: u8) -> ByteArray {
        "Don't feed the trolls."
    }

    #[inline]
    fn count(level: u8) -> u32 {
        1000
    }

    #[inline]
    fn tasks(level: u8) -> Span<BushidoTask> {
        let total: u32 = Self::count(level);
        Task::Feeding.tasks(level, total, total)
    }
}