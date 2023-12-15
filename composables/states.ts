export const useProject = () => useState<object>('project', () => {
    const config = useRuntimeConfig()
    return  config.public.defaultProject
})